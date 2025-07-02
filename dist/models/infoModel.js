"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("config"));
var systeminformation_1 = __importDefault(require("systeminformation"));
var cpu = function () {
    return systeminformation_1.default.cpu();
};
var cpuSpeed = function () { return __awaiter(void 0, void 0, void 0, function () {
    var speed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (config_1.default.nodeEnv === "production") {
                    return [2 /*return*/, systeminformation_1.default.cpuCurrentSpeed()];
                }
                return [4 /*yield*/, systeminformation_1.default.cpuCurrentSpeed()];
            case 1:
                speed = _a.sent();
                speed.avg = Math.round((Math.random() * 50 + 0) * 10) / 10;
                // console.log('speed:', speed)
                return [2 /*return*/, speed];
        }
    });
}); };
var cpuTemp = function () { return __awaiter(void 0, void 0, void 0, function () {
    var temp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (config_1.default.nodeEnv === "production") {
                    return [2 /*return*/, systeminformation_1.default.cpuTemperature()];
                }
                return [4 /*yield*/, systeminformation_1.default.cpuTemperature()];
            case 1:
                temp = _a.sent();
                temp.main = Math.round((Math.random() * 20 + 60) * 10) / 10;
                // console.log('temp:', temp)
                return [2 /*return*/, temp];
        }
    });
}); };
var cpuLoad = function () {
    return systeminformation_1.default.currentLoad();
};
var mem = function () {
    return systeminformation_1.default.mem();
};
var os = function () {
    return systeminformation_1.default.osInfo();
};
var load = function () {
    return systeminformation_1.default.currentLoad();
};
var processes = function () {
    return systeminformation_1.default.processes();
};
var disk = function () {
    return systeminformation_1.default.diskLayout();
};
var fsSize = function () {
    return systeminformation_1.default.fsSize();
};
var network = function () {
    return systeminformation_1.default.networkInterfaces();
};
var networkStats = function () {
    return systeminformation_1.default.networkStats();
};
var wifi = function () {
    return systeminformation_1.default.wifiNetworks();
};
exports.default = {
    cpu: cpu,
    cpuSpeed: cpuSpeed,
    cpuTemp: cpuTemp,
    cpuLoad: cpuLoad,
    mem: mem,
    os: os,
    load: load,
    processes: processes,
    disk: disk,
    fsSize: fsSize,
    network: network,
    networkStats: networkStats,
    wifi: wifi,
};
// const info2 = {
//     cpu: {
//         speed: 70,
//         temp: 60,
//         avgLoad: 0.15,
//         currentLoad: 0.15,
//     },
//     memory: {
//         total: 100,
//         free: 70,
//         used: 30
//     },
//     // battery:{
//     // },
//     network: [
//         {
//             interface: 'eth0',
//             ip4: '',
//             ip4subnet: '',
//             dhcp: '',
//             mac: '',
//         },
//         {
//             interface: 'wlan0',
//             ip4: '',
//             ip4subnet: '',
//             dhcp: '',
//             mac: '',
//         }],
//     processes: [
//         {
//             id: 'ábc',
//             name: 'proc1',
//             cpu: 0.10,
//             memory: 150,
//             status: 'idle'
//         },
//         {
//             id: 'xyz',
//             name: 'proc2',
//             cpu: 0.20,
//             memory: 723,
//             status: 'running'
//         }
//     ]
// }
