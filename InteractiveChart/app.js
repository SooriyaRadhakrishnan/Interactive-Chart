


const DATA2= [
    {id: 'd1', region: 'USA', value: 10},
    {id: 'd2', region: 'Canada', value: 12},
    {id: 'd3', region: 'Mexico', value: 13},
    {id: 'd4', region: 'UK', value: 7},
    {id: 'd5', region: 'Egypt', value: 20}

];


  
 



const MARGINS = {top: 20, bottom: 10};
const C_WIDTH = 600;
const C_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;

let selectedData = DATA;

const x = d3.scaleBand().rangeRound([0,C_WIDTH]).padding(0.1);
const y = d3.scaleLinear().range([C_HEIGHT, 0]);

const container = d3
    .select('svg')
    .attr('width', C_WIDTH)
    .attr('height', C_HEIGHT + MARGINS.top + MARGINS.bottom);
    
x.domain(DATA.map(d => d.region));
y.domain([0,d3.max(DATA, d => d.value)+ 3])

const chart = container.append('g');

chart.append('g').call(d3.axisBottom(x).tickSizeOuter(0)).attr('transform', `translate(0,${C_HEIGHT})`);

function renderChart() {
    chart
        .selectAll('.bar')
        .data(selectedData, data => data.id)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('width', x.bandwidth())
        .attr('height', data =>  C_HEIGHT - y(data.value))
        .attr('x', data => x(data.region))
        .attr('y', data => y(data.value));


    chart
        .selectAll('.bar')
        .data(selectedData, data => data.id)
        .exit()
        .remove();

    chart
        .selectAll('.label')
        .data(selectedData, data => data.id)
        .enter()
        .append('text')
        .text(data => data.value)
        .attr('x', data => x(data.region) + x.bandwidth() / 2)
        .attr('y',data => y(data.value) - 20 )
        .attr('text-anchor', 'middle')
        .classed ('label', true);

    chart 
        .selectAll('.label')
        .data(selectedData, data => data.id)
        .exit()
        .remove();
}

renderChart();

let unselectedIds = [];

const listItems = d3
    .select('#data')
    .select('ul')
    .selectAll('li')
    .data(DATA)
    .enter()
    .append('li');

listItems
    .append('span')
    .text(data => data.region);

listItems
    .append('input')
    .attr('type', 'checkbox')
    .attr('checked', true)
    .on('change', (data) => {
      if (unselectedIds.indexOf(data.id) === -1){
        unselectedIds.push(data.id);
      }
      else{
        unselectedIds = unselectedIds.filter(id => id !== data.id);
      }
      selectedData = DATA.filter((d) => unselectedIds.indexOf(d.id) === -1);
      renderChart();
    });
