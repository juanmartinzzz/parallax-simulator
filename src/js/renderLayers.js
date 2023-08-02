const renderLayers = () => {
    const renderArea = document.getElementById('renderArea');

    layers.map(({objects}, index) => {
        const level = index;
        
        objects.map(object => {
            const {x, y} = object.position;
            const container = createElementWithAttributes({type: 'div', attributes: {class: 'object', level, style: {left: `${x}px`, top: `${y}px`}}});
            // container.style.top = `${y}px`;
            const {src, width} = object.image;
            const image = createElementWithAttributes({type: 'img', attributes: {src}});

            container.appendChild(image);
            renderArea.appendChild(container);
        });


    })
}

renderLayers();