// A. CRYPTOGRAPHIC UTILITY MECHANISM
function processBase64(mode) {
    const inputVal = document.getElementById('decoder-input').value.trim();
    const outputBox = document.getElementById('decoder-output');
    
    if (!inputVal) {
        outputBox.innerText = "Error: Input buffer is completely empty.";
        outputBox.style.color = "#ff453a";
        return;
    }

    try {
        if (mode === 'encode') {
            const encoded = btoa(inputVal);
            outputBox.innerText = `Encoded Output: ${encoded}`;
            outputBox.style.color = "#00ff66";
        } else {
            const decoded = atob(inputVal);
            outputBox.innerText = `Decoded Output: ${decoded}`;
            outputBox.style.color = "#00ff66";
        }
    } catch (e) {
        outputBox.innerText = "Invalid String Format Object Exception Error.";
        outputBox.style.color = "#ff453a";
    }
}

// B. EXPANDED TERMINAL SIMULATION ENGINE
const inputField = document.getElementById('term-input');
const terminalBody = document.getElementById('terminal-body');

inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const commandText = inputField.value.trim().toLowerCase();
        
        const userLine = document.createElement('p');
        userLine.style.color = '#fff';
        userLine.innerHTML = `<span style="color:#ff9f0a">guest@cyber_shield:~$</span> ${inputField.value}`;
        terminalBody.appendChild(userLine);

        const responseLine = document.createElement('p');
        responseLine.className = 'log-line';

        if (commandText === 'help') {
            responseLine.innerHTML = "Commands list: <br> - 'status' : Fetch local environment state <br> - 'cheatsheet' : Print networking terminal commands reference <br> - 'clear' : Reset logs window";
        } else if (commandText === 'status') {
            responseLine.innerHTML = "[+] Active Node: LocalHost Gateway <br>[+] Cryptographic Modules: Clean (Base64 Safe) <br>[+] Sandbox Trace: Audited.";
        } else if (commandText === 'cheatsheet') {
            responseLine.innerHTML = "Essential Reference Matrix: <br> 1. 'ss -antp' - Audit current active port descriptors <br> 2. 'pkill -f' - Dynamic lifecycle execution kill <br> 3. 'chmod +x' - Set script permissions structure";
            responseLine.style.color = "#ff9f0a";
        } else if (commandText === 'clear') {
            terminalBody.innerHTML = '';
            inputField.value = '';
            return;
        } else if (commandText === '') {
            responseLine.innerHTML = '';
        } else {
            responseLine.innerHTML = `[-] bash: command execution failure near: ${commandText}`;
            responseLine.style.color = '#ff453a';
        }

        terminalBody.appendChild(responseLine);
        terminalBody.scrollTop = terminalBody.scrollHeight;
        inputField.value = '';
    }
});

