import si from "systeminformation";

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

export type InfoType = keyof Info;
