import { findServer } from './findServer';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const servers = [
  { url: 'https://does-not-work.perfume.new', priority: 1 },
  { url: 'https://gitlab.com', priority: 4 },
  { url: 'http://app.scnt.me', priority: 3 },
  { url: 'https://offline.scentronix.com', priority: 2 },
];

describe('findServer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the online server with the lowest priority', async () => {
    mockedAxios.get.mockImplementation((url) => {
      if (url === 'https://gitlab.com') {
        return Promise.resolve({ status: 200 });
      } else if (url === 'http://app.scnt.me') {
        return Promise.resolve({ status: 200 });
      } else {
        return Promise.reject(new Error('Network Error'));
      }
    });

    const result = await findServer(servers);
    expect(result).toEqual({ url: 'http://app.scnt.me', priority: 3 });
  });

  it('should throw an error if no servers are online', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(findServer(servers)).rejects.toThrow('No servers are online');
  });

  it('should handle timeout correctly', async () => {
    mockedAxios.get.mockImplementation((url) => {
      if (url === 'https://gitlab.com' || url === 'http://app.scnt.me') {
        return new Promise((resolve) =>
          setTimeout(() => resolve({ status: 300 }), 6000)
        );
      } else {
        return Promise.reject(new Error('Network Error'));
      }
    });

    await expect(findServer(servers)).rejects.toThrow('No servers are online');
  }, 10000);
});
