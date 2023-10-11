// RMM (remote montoring management software)
// A module that interfaces with the specified RMM.

// import {} from './connectwise';
// import {} from './nable';
// import {} from './datto'

export type TypeRMMSoftware = {
  priority: number; // Temporary property used for our development to prioritise integrations.
};

export const mapRmmSoftware: Record<string, TypeRMMSoftware> = {
  "N-central / N-Able (prev. owner SolarWinds)": { priority: 1 },
  "ConnectWise Automate (prev. LabTech)": { priority: 1 },
  "Kaseya VSA": { priority: 2 },
  "Datto RMM": { priority: 2 },
  "NinjaRMM": { priority: 3 },
  "Atera": { priority: 3 },
  "Pulseway": { priority: 4 },
  "ManageEngine Desktop Central": { priority: 4 },
  "Naverisk": { priority: 4 },
  "Continuum Command": { priority: 4 },
  "Autotask Endpoint Management": { priority: 4 },
  "SysAid": { priority: 4 },
};
export const arrayRmmSoftware: string[] = Object.keys(mapRmmSoftware);
