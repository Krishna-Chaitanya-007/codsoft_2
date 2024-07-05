for(i=1; i<4; i++){
    
    document.querySelector("#custom-cards > div > div:nth-child(" + i + ")").addEventListener('mouseover', function(){
        this.classList.add('scaled');
    });
    document.querySelector("#custom-cards > div > div:nth-child(" + i + ")").addEventListener('mouseout', function(){
        this.classList.remove('scaled');
    });
}
