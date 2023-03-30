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
exports.__esModule = true;
var client_1 = require("@prisma/client");
// prisma client
var prisma = new client_1.PrismaClient();
// pagination vairables
var limit = 10;
var offset = 1269;
// count of total pokemon that can be queried
// this is from the 'count' property of the API response
// we will update this each call to make sure we get all the pokemon
var count = 1279;
var insertPokemonIntoDatabase = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, pokemonList, _i, pokemonList_1, pokemon, response_1, data_1, createdPokemon, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(offset < count)) return [3 /*break*/, 12];
                return [4 /*yield*/, fetch("https://pokeapi.co/api/v2/pokemon?offset=".concat(offset, "&limit=").concat(limit), {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    })];
            case 1:
                response = _a.sent();
                // checks to see if the fetch request passed
                if (!response.ok) {
                    throw Error("Network response was not ok for getAll call");
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                pokemonList = data.results;
                // update the count
                count = data.count;
                // update the offset
                offset += limit;
                _i = 0, pokemonList_1 = pokemonList;
                _a.label = 3;
            case 3:
                if (!(_i < pokemonList_1.length)) return [3 /*break*/, 11];
                pokemon = pokemonList_1[_i];
                return [4 /*yield*/, fetch(pokemon.url, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    })];
            case 4:
                response_1 = _a.sent();
                // checks to see if the fetch request passed
                if (!response_1.ok) {
                    throw Error("Network response was not ok for getOne call");
                }
                return [4 /*yield*/, response_1.json()];
            case 5:
                data_1 = _a.sent();
                createdPokemon = {};
                _a.label = 6;
            case 6:
                _a.trys.push([6, 8, , 9]);
                return [4 /*yield*/, prisma.pokemon.create({
                        data: {
                            name: data_1.name,
                            speciesName: data_1.species.name,
                            artwork: data_1.sprites.other["official-artwork"].front_default,
                            type: data_1.types[0].type.name,
                            hp: data_1.stats[0].base_stat,
                            attack: data_1.stats[1].base_stat,
                            defense: data_1.stats[2].base_stat,
                            speed: data_1.stats[5].base_stat,
                            weight: data_1.weight,
                            height: data_1.height,
                            url: pokemon.url
                        }
                    })];
            case 7:
                createdPokemon = _a.sent();
                return [3 /*break*/, 9];
            case 8:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 9];
            case 9:
                console.log("Created pokemon with id: ".concat(createdPokemon.id));
                _a.label = 10;
            case 10:
                _i++;
                return [3 /*break*/, 3];
            case 11: return [3 /*break*/, 0];
            case 12: return [2 /*return*/];
        }
    });
}); };
insertPokemonIntoDatabase();
