/*
File: app.ts
Author: Ambrus Zsolt
Copyright: 2024, Ambrus Zsolt
Group: Szoft I-1-N
Date: 2024-05-30
Github: https://github.com/ZsoltAmbrus/DolgozatSallai0530
Licenc: GNU GPL
*/

function calculateEllipsoidVolume(a: number, b: number, c: number): number {
    return (4 / 3) * Math.PI * a * b * c;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('volumeForm') as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const a = parseFloat((document.getElementById('axisA') as HTMLInputElement).value);
        const b = parseFloat((document.getElementById('axisB') as HTMLInputElement).value);
        const c = parseFloat((document.getElementById('axisC') as HTMLInputElement).value);

        const volume = calculateEllipsoidVolume(a, b, c);
        const resultElement = document.getElementById('result') as HTMLTableElement;

        resultElement.innerHTML = `
            <tr>
                <th>Érték Kerületben</th>
            </tr>
            <tr>
                <td>${volume.toFixed(2)}</td>
            </tr>
        `;
    });
});
