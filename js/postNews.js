(async () => {
        const response = await fetch('https://api.github.com/repos/italomded/aprendiz_4-0/contents/md/news');
        const data = await response.json();

        var html = [];
        html.push(
            '<div class="row justify-content-center">',
            '<div class="col-10">',
            '<div class="card">',
            '<div class="card-body">'
        );
        const html_1 = html.join("");

        html = [];
        html.push(
            'Error 404: File not found.',
            '</md-block>',
            '</div></div></div></div>'
        );
        const html_2 = html.join("");

        const finalHtml = "";
        for (let file of data) {
            finalHtml += html_1 + `<md-block src="${file.path}">` + html_2;
        }

        document.getElementById('newsPlaceholder').innerHTML = finalHtml;
    }
)()



            
                
                    
                        
                            
                        
                    
                
            
        