const config = require('./config');
const Users = require('./Users');
const ProjTypes = require('./ProjTypes');

const d2Acq = require('./2d/_2d_acq');
const d2Process = require('./2d/_2d_process');
const d2Interp = require('./2d/_2d_interp');

const d3Acq = require('./3d/_3d_acq');
const d3Process = require('./3d/_3d_process');
const d3Interp = require('./3d/_3d_interp');

const vspD2Acq = require('./vsp/acq/vsp-2d');
const vspStandardAcq = require('./vsp/acq/vsp-standard');
const vspProInterp = require('./vsp/prointerp');

const wdzAcqFracture = require('./wdz/acq/acq-fracture');
const wdzAcqMonitorIn = require('./wdz/acq/acq-monitor-in');
const wdzAcqMonitorSurface = require('./wdz/acq/acq-monitor-surface');
const wdzProInterp = require('./wdz/prointerp');

module.exports = {
  config,
  Users,
  ProjTypes,
  ValidateSchemas: [
    d2Acq,
    d2Interp,
    d2Process,
    d3Acq,
    d3Process,
    d3Interp,
    vspD2Acq,
    vspStandardAcq,
    vspProInterp,
    wdzAcqFracture,
    wdzAcqMonitorIn,
    wdzAcqMonitorSurface,
    wdzProInterp,
  ],
};
