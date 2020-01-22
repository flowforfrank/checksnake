const generateWorld = () => {
    for (let rowIndex = 0; rowIndex < worldSize; rowIndex++) {
        const row = document.createElement('div');
    
        row.classList.add('row');
        
        for (let columnIndex = 0; columnIndex < worldSize; columnIndex++) {
            const input = document.createElement('input');
    
            input.type = 'checkbox';
    
            row.appendChild(input);
        }
    
        document.querySelector('.world').appendChild(row);
    }
}

generateWorld();