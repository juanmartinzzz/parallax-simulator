document.addEventListener('mousemove', ({clientX, clientY}) => {
    const cursorX = clientX;
    const cursorY = clientY;

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    const displacementX = (cursorX-viewportWidth/2);
    const displacementY = (cursorY-viewportHeight/2);

    Array.from(document.getElementsByClassName('object')).map(object => {
        const level = parseInt(object.getAttribute('level'));

        // object.style.transform = `translate(${displacementX*((level+1)/20)}px, ${displacementY*((level+1)/20)}px) scale(${1+level/20})`;
        object.style.transform = `translate(${displacementX*((level+1)/20)}px, ${displacementY*((level+1)/20)}px)`;
    });
});