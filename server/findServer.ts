import axios from 'axios';

const URL = [
  {
    url: 'https://does-not-work.perfume.new',
    priority: 1,
  },
  {
    url: 'https://gitlab.com',
    priority: 4,
  },
  {
    url: 'http://app.scnt.me',
    priority: 3,
  },
  {
    url: 'https://offline.scentronix.com',
    priority: 2,
  },
];

// Interface for Server
interface Server {
  url: string;
  priority: number;
}

// Configuration
const TIMEOUT = 5000; // 5 seconds

/**
 * Checks if a server is online by making a GET request.
 * @param {Server} server - The server to check.
 * @returns {Promise<boolean>} - Promise that resolves to true if the server is online.
 */
const checkServerStatus = async (server: Server): Promise<boolean> => {
  try {
    const response = await axios.get(server.url, { timeout: TIMEOUT });
    return response.status >= 200 && response.status < 300;
  } catch (error) {
    return false;
  }
};

/**
 * Finds the online server with the lowest priority.
 * @param {Server[]} servers - List of servers to check.
 * @returns {Promise<Server>} - Promise that resolves to the online server with the lowest priority.
 * @throws Will throw an error if no servers are online.
 */
export const findServer = async (servers: Server[]): Promise<Server> => {
  const serverStatusPromises = servers.map(async (server) => ({
    server,
    online: await checkServerStatus(server),
  }));

  const serverStatuses = await Promise.all(serverStatusPromises);

  const onlineServers = serverStatuses.filter((status) => status.online);

  if (onlineServers.length === 0) {
    throw new Error('No servers are online');
  }

  onlineServers.sort((a, b) => a.server.priority - b.server.priority);

  return onlineServers[0].server;
};
