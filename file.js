const url = './data.json';


getData();

async function getData() {
    const response = await fetch(url);
    //console.log(response);
    const data = await response.json();
    //console.log(data);
    
    labels = [];
    values = [];
    for(let i of data) {
        labels.push(i.day);
        values.push(i.amount);
    }console.log(labels, values);


    new Chart(document.getElementById('canvas'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    //label: '$',
                    backgroundColor: ['hsl(10, 79%, 65%)', 
                                      'hsl(10, 79%, 65%)',
                                      'hsl(186, 34%, 60%)', 
                                      'hsl(10, 79%, 65%)',
                                      'hsl(10, 79%, 65%)', 
                                      'hsl(10, 79%, 65%)',
                                      'hsl(10, 79%, 65%)'],
                    data: values,
                    //borderWidth: 1,
                    borderSkipped: false,
                    borderRadius:  {
                        topRight: 5,
                        topLeft: 5,
                        bottomRight: 5,
                        bottomLeft: 5
                    },
                 }
            ]
        },
        options: {
           plugins: {
            legend: {display: false},
            tooltip: {
                displayColors: false,
                callbacks: {
                    title: function() {
                        return null;
                    },
                    label: function(context) {
                       let label = context.dataset.label || '';
                       if(label) {
                        label += ': ';
                       }
                       if(context.parsed.y !== null) {
                        label += new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(context.parsed.y);
                       }
                       return label;
                    }
                    
                }
            }
           },
            title: {
                display: false,
               // text: ''
            },
            scales: {
                y: {
                    display: false,
                   grid: {
                    display: false
                   }
                },
                x: {
                    // display: false,
                    grid: {
                        display: false,
                        borderWidth: 0,
                    }
                }
            }, 
         }
    });
}


