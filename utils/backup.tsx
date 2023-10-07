// Placeholder

// DATABASE

// Need a way to:
// - Backup supabase tables (for specific spaces / for clients to create backups of all their data)
// - Restore supabase tables (for specific spaces / for clients to restore backups of all their data)
// - Also need a way to price this and prevent people from using up huge amounts of storage (a $ per backup, or just as part of metered billing / standard GB cap)

// The above functionality might just use standard supabase backups - But it is likely that we will need to use more granular functions that can do selected tables, and make those tables available to the client themselves.
// This will likely interact with the 'undo/redo' functionality (see the history module)


//Grandfather-father-son (GFS) is a commonly used backup rotation scheme for managing backups. The scheme employs three sets of backups: daily (son), weekly (father), and monthly (grandfather).
// Others:
// Tower of Hanoi: This rotation scheme uses more tapes and is more complicated but allows for longer intervals before the oldest data is overwritten. Tapes are reused in such a way that some tapes hold many recent backups, while others hold fewer, older backups.
// Incremental: Only changes made since the last backup are stored. Requires a full backup to restore all data, along with all the subsequent incremental backups.
// Differential: Backs up all the data that has changed since the last full backup. To restore, you only need the last full backup and the last differential backup.
// Full Backups: Every backup is a full copy of the data. This is the simplest but most storage-intensive method.
// Continuous Data Protection: This method backs up data whenever a change is made. It's the most granular level of backup and allows you to restore data to any point in time.
// Mirror Backup: A real-time backup that instantly copies any changes made to the data. The backup is always an exact copy of the source data.
// Snapshot Backup: Captures the state of a system at a particular point in time. Often used in virtualized environments.
// Reverse Incremental: Similar to incremental but the latest backup is always a full backup. Older backups are a combination of previous full backups and the differences between them.
// Synthetic Full Backup: Combines an initial full backup with subsequent incremental backups to synthesize a new full backup. This minimizes the need to take multiple full backups.
// Multi-Cloud Backup: Data is backed up across multiple cloud services for redundancy.

