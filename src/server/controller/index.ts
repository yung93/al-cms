import shell from 'shelljs';

export const execute = async (command: string): Promise<string> => {
    console.log(`execute ${command}`);
    if (!shell.which('git')) {
        throw new Error('Sorry, this script requires git');
    } else {
        return await shell.exec(command);
    }
}
