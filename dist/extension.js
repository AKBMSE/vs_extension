"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode = __toESM(require("vscode"));
function activate(context) {
  console.log('Congratulations, your extension "sql-testcase-ai" is now active!');
  const helloDisposable = vscode.commands.registerCommand("sql-testcase-ai.helloWorld", () => {
    vscode.window.showInformationMessage("Hello World from sql-testcase-ai!");
  });
  context.subscriptions.push(helloDisposable);
  const fileDisposable = vscode.commands.registerCommand("sql-testcase-ai.generateForFile", async (uri) => {
    const fileUri = uri || vscode.window.activeTextEditor?.document.uri;
    if (!fileUri) {
      vscode.window.showErrorMessage("No file selected.");
      return;
    }
    const content = (await vscode.workspace.fs.readFile(fileUri)).toString();
    vscode.window.showInformationMessage("Stub: Would generate test cases for file: " + fileUri.fsPath);
  });
  context.subscriptions.push(fileDisposable);
  const folderDisposable = vscode.commands.registerCommand("sql-testcase-ai.generateForFolder", async (uri) => {
    const folderUri = uri;
    if (!folderUri) {
      vscode.window.showErrorMessage("No folder selected.");
      return;
    }
    const files = await vscode.workspace.findFiles(new vscode.RelativePattern(folderUri.fsPath, "**/*.{sql,py}"));
    for (const file of files) {
      const content = (await vscode.workspace.fs.readFile(file)).toString();
    }
    vscode.window.showInformationMessage("Stub: Would generate test cases for all files in folder: " + folderUri.fsPath);
  });
  context.subscriptions.push(folderDisposable);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
