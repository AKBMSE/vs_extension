// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "sql-testcase-ai" is now active!');

	// Hello World command (default)
	const helloDisposable = vscode.commands.registerCommand('sql-testcase-ai.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from sql-testcase-ai!');
	});
	context.subscriptions.push(helloDisposable);

	// Command: Generate test cases for current file
	const fileDisposable = vscode.commands.registerCommand('sql-testcase-ai.generateForFile', async (uri?: vscode.Uri) => {
		const fileUri = uri || vscode.window.activeTextEditor?.document.uri;
		if (!fileUri) {
			vscode.window.showErrorMessage('No file selected.');
			return;
		}
		const content = (await vscode.workspace.fs.readFile(fileUri)).toString();
		// TODO: Call AI API to generate test cases from content
		// TODO: Call PowerShell script to write to Excel
		vscode.window.showInformationMessage('Stub: Would generate test cases for file: ' + fileUri.fsPath);
	});
	context.subscriptions.push(fileDisposable);

	// Command: Generate test cases for all files in a folder
	const folderDisposable = vscode.commands.registerCommand('sql-testcase-ai.generateForFolder', async (uri?: vscode.Uri) => {
		const folderUri = uri;
		if (!folderUri) {
			vscode.window.showErrorMessage('No folder selected.');
			return;
		}
		const files = await vscode.workspace.findFiles(new vscode.RelativePattern(folderUri.fsPath, '**/*.{sql,py}'));
		for (const file of files) {
			const content = (await vscode.workspace.fs.readFile(file)).toString();
			// TODO: Call AI API to generate test cases from content
			// TODO: Call PowerShell script to write to Excel
		}
		vscode.window.showInformationMessage('Stub: Would generate test cases for all files in folder: ' + folderUri.fsPath);
	});
	context.subscriptions.push(folderDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
