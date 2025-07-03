import config from "config";
import si from "systeminformation";

const cpu = () => {
  return si.cpu();
};

const cpuSpeed = async () => {
  if (config.nodeEnv === "production") {
    return si.cpuCurrentSpeed();
  }
  const speed = await si.cpuCurrentSpeed();
  speed.avg = Math.round((Math.random() * 50 + 0) * 10) / 10;
  // console.log('speed:', speed)
  return speed;
};

const cpuTemp = async () => {
  if (config.nodeEnv === "production") {
    return si.cpuTemperature();
  }
  const temp = await si.cpuTemperature();
  temp.main = Math.round((Math.random() * 20 + 60) * 10) / 10;
  // console.log('temp:', temp)
  return temp;
};

const cpuLoad = () => {
  return si.currentLoad();
};

const mem = () => {
  return si.mem();
};

const os = () => {
  return si.osInfo();
};

const processes = () => {
  return si.processes();
};

const disk = () => {
  return si.diskLayout();
};

const fsSize = () => {
  return si.fsSize();
};

const network = () => {
  return si.networkInterfaces();
};

const networkStats = () => {
  return si.networkStats();
};

const wifi = () => {
  return si.wifiNetworks();
};

export const infoFunc = {
  cpu,
  cpuSpeed,
  cpuTemp,
  cpuLoad,
  mem,
  os,
  processes,
  disk,
  fsSize,
  network,
  networkStats,
  wifi,
};

export type Info = {
  cpu?: si.Systeminformation.CpuData;
  cpuSpeed?: si.Systeminformation.CpuCurrentSpeedData;
  cpuTemp?: si.Systeminformation.CpuTemperatureData;
  cpuLoad?: si.Systeminformation.CurrentLoadData;
  mem?: si.Systeminformation.MemData;
  os?: si.Systeminformation.OsData;
  processes?: si.Systeminformation.ProcessesData;
  disk?: si.Systeminformation.DiskLayoutData[];
  fsSize?: si.Systeminformation.FsSizeData;
  network?: si.Systeminformation.NetworkInterfacesData[];
  networkStats?: si.Systeminformation.NetworkStatsData[];
  wifi?: si.Systeminformation.WifiNetworkData[];
};

export type InfoKey = keyof typeof infoFunc;
