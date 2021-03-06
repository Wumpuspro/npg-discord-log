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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var discord_js_1 = require("discord.js");
var handlers_1 = require("./handlers");
var eventRegistered = false;
module.exports = function (client, options) { return __awaiter(void 0, void 0, void 0, function () {
    var intents;
    return __generator(this, function (_a) {
        if (eventRegistered)
            return [2 /*return*/];
        eventRegistered = true;
        intents = new discord_js_1.Intents(client.options.intents);
        /* HANDLE GUILDS EVENTS */
        if (intents.has("GUILDS")) {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("channelUpdate event handler registered.");
            client.on("channelUpdate", function (oldChannel, newChannel) {
                handlers_1.handleChannelUpdateEvent(client, oldChannel, newChannel);
            });
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("guildUpdate event handler registered.");
            client.on("guildUpdate", function (oldGuild, newGuild) {
                handlers_1.handleGuildUpdateEvent(client, oldGuild, newGuild);
            });
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("roleUpdate event handler registered.");
            client.on("roleUpdate", function (oldRole, newRole) {
                handlers_1.handleRoleUpdateEvent(client, oldRole, newRole);
            });
        }
        else {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("channelUpdate, guildUpdate and roleUpdate event handlers not registered (missing GUILDS intent).");
        }
        /* HANDLE MEMBER EVENTS */
        if (intents.has("GUILD_MEMBERS")) {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("guildMemberUpdate event handler registered.");
            client.on("guildMemberUpdate", function (oldMember, newMember) {
                handlers_1.handleGuildMemberUpdateEvent(client, oldMember, newMember);
            });
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("userUpdate event handler registered.");
            client.on("userUpdate", function (oldUser, newUser) {
                handlers_1.handleUserUpdateEvent(client, oldUser, newUser);
            });
        }
        else {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("guildMemberUpdate, userUpdate event handlers not registered (missing GUILD_MEMBERS intents).");
        }
        /* HANDLE MESSAGE UPDATE EVENTS */
        if (intents.has("GUILD_MESSAGES")) {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("messageUpdate event handler registered.");
            client.on("messageUpdate", function (oldMessage, newMessage) {
                handlers_1.handleMessageUpdateEvent(client, oldMessage, newMessage);
            });
        }
        else {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("messageUpdate event handler not registered (missing GUILD_MESSAGES intent).");
        }
        /* HANDLE PRESENCE UPDATE EVENTS */
        if (intents.has("GUILD_PRESENCES")) {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("presenceUpdate event handler registered.");
            client.on("presenceUpdate", function (oldPresence, newPresence) {
                handlers_1.handlePresenceUpdateEvent(client, oldPresence, newPresence);
            });
        }
        else {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("presenceUpdate event handler not registered (missing GUILD_PRESENCES intent).");
        }
        /* HANDLE VOICE STATE UPDATE */
        if (intents.has("GUILD_VOICE_STATES")) {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("voiceStateUpdate event handler registered.");
            client.on("voiceStateUpdate", function (oldState, newState) {
                handlers_1.handleVoiceStateUpdateEvent(client, oldState, newState);
            });
        }
        else {
            if (options === null || options === void 0 ? void 0 : options.debug)
                console.log("voiceStateUpdate event handler not registered (missing GUILD_VOICE_STATES intent).");
        }
        return [2 /*return*/];
    });
}); };
