async function get() {
    const response = await fetch('https://api.github.com/repos/italomded/aprendiz_4-0/contents/md/news');
    return response.json();
}

async function populate() {
    const data = await this.get()
    console.log(data);

    let html = [];
    html.push(
        '<div class="row justify-content-center mb-3">',
        '<div class="col-12 col-lg-10 justify-content-center">',
        '<div class="card">',
        '<div class="card-header">',
        '<i class="fa-solid fa-newspaper"></i>',
        '</div>',
        '<div class="card-body">'
    );
    const html_1 = html.join("");

    html = [];
    html.push(
        'Error 404: File not found.',
        '</md-block>',
        '</div></div>',
        '<div class="text-center mt-3">',
        '<i class="fa-solid fa-diagram-next"></i>',
        '</div></div></div>'
    );
    const html_2 = html.join("");

    let finalHtml = "";
    if (data.length > 5) {
        for (let i = data.length - 5 ; i < data.length ; i++ ) {
            finalHtml += html_1 + `<md-block src="${data[i].path}">` + html_2;
        }
    } else {
        for (let file of data) {
            finalHtml += html_1 + `<md-block src="${file.path}">` + html_2;
        }
    }

    document.getElementById('newsPlaceholder').innerHTML = finalHtml;
}

async function archived() {
    const data = await this.get()
    let html = "";
    for (let file of data) {
        html += `<a href="${file.html_url}" class="list-group-item list-group-item-action"><i class="fa-solid fa-file"></i> ${file.name}</a>`;
    }
    document.getElementById('newsPlaceholder').innerHTML = html;
}



            
                
                    
                        
                            
                        
                    
                
            
        