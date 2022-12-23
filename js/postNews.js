(async () => {
        const response = await fetch('https://api.github.com/repos/italomded/aprendiz_4-0/contents/md/news');
        const data = await response.json();

        let htmlString = '<div class="row justify-content-center">';
        htmlString += '<div class="col-10">';
        htmlString += '<div class="card">';
        htmlString += '<div class="card-body">';

        for (let file of data) {
            htmlString += `<md-block src="${file.path}">`;
        }

        htmlString += 'Error 404: File not found.';
        htmlString += '</md-block>';
        htmlString += '</div>';
        htmlString += '</div>';
        htmlString += '</div>';
        htmlString += '</div>';

        document.getElementsByTagName('body')[0].innerHTML = htmlString;
    }
)()



            
                
                    
                        
                            
                        
                    
                
            
        