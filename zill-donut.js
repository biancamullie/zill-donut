$.fn.zillDonut = function(config) {
  var leerplanversie = config.curriculumVersion;
  var fieldCounters = config.fieldCounters;
  $.get("https://accapi.vsko.be/content?root=" + leerplanversie + "&typeIn=CURRICULUM_ZILL_CLUSTER,CURRICULUM_ZILL_DEVELOPMENT_FIELD", function(data) {
    var personClusterKey;
    var cultureClusterKey;
    var personData = [];
    var cultureData = [];
    var personChartData = [];
    var cultureChartData = [];
    for (i = 0; i < data.results.length; i++) { // get clusters
      var cluster = data.results[i].$$expanded;
      if (cluster.title == 'Cultuurgebonden ontwikkeling') {
        cultureClusterKey = cluster.key;
        //              cultureChartData = addFields(cluster);
      }
      else if (cluster.title == 'Persoonsgebonden ontwikkeling') {
        personClusterKey = cluster.key;
        //              personChartData = addFields(cluster);
      }
    }
    for (i = 0; i < data.results.length; i++) { // get fields beneath
      if (data.results[i].$$expanded.type == 'CURRICULUM_ZILL_DEVELOPMENT_FIELD') {
        var field = data.results[i].$$expanded;
        if (field.$$relationsFrom[0].$$expanded.to == personClusterKey) {
          personData.push(createObject(field));
        }
        else if (field.$$relationsFrom[0].$$expanded.to == cultureClusterKey) {
          cultureData.push(createObject(field));
        }
      }
    }
    personData.sort(function(a, b) {
      return a.readorder - b.readorder
    });
    cultureData.sort(function(a, b) {
      return a.readorder - b.readorder
    });
    
    personChartData = getChartData(personData);
    cultureChartData = getChartData(cultureData);


    function createObject(field) {
      var object = {};
      object['field'] = field;
      object['count'] = fieldCounters[field.key] != undefined ? fieldCounters[field.key] : 0;
      object['readorder'] = field.$$relationsFrom[0].$$expanded.readorder;
      return object;
    }

    function getReverseCount(count) {
      if (count > 5) {
        return 0
      }
      else {
        return 5 - count
      }
    }

    function getChartData(fields) {
      var i;
      var chartData = [];
      var result;
      var addChartDataForField = function(field) {
        chartData.push({
          value: field.count,
          color: field.field.color,
          label: field.field.title + ' ingevuld'
        });
        chartData.push({
          value: getReverseCount(field.count),
          color: '#f2f2f2',
          label: field.field.title + ' grijs'
        });
      };
      for (i = 0; i < fields.length; i++) {
        addChartDataForField(fields[i]);
      }
      return chartData;
    };
    var myChart1 = new Chart(newChart1, {
      type: 'doughnut',
      data: {
        labels: cultureChartData.map(function(a) {
            return a.label;
          }),
        datasets: [{
          data: cultureChartData.map(function(a) {
            return a.value;
          }),
          backgroundColor: cultureChartData.map(function(a) {
            return a.color;
          })
        }]
      },
      options: cultureChartOptions
    });
    var myChart2 = new Chart(newChart2, {
      type: 'doughnut',
      data: {
        labels: personChartData.map(function(a) {
            return a.label;
          }),
        datasets: [{
          data: personChartData.map(function(a) {
            return a.value;
          }),
          backgroundColor: personChartData.map(function(a) {
            return a.color;
          })
        }]
      },
      options: personChartOptions
    });
  });
  var personChartOptions = {
    maintainAspectRatio: false,
    legend: {display:false},
    tooltips: {mode:'label'},
    segmentShowStroke: false,
    segmentStrokeColor: '#fff',
    segmentStrokeWidth: 2,
    //animations
    animation: false,
    animationSteps: 170,
    animationEasing: 'easeOutBounce',
    animateRotate: false,
    animateScale: false,
    tooltips : {
      enabled:false
    },
    cutoutPercentage:50
  };
  var cultureChartOptions = {
    maintainAspectRatio: false,
    legend: {display:false},
    tooltips: {mode:'label'},
    segmentShowStroke: false,
    segmentStrokeColor: '#fff',
    segmentStrokeWidth: 2,
    //animations
    animation: false,
    animationSteps: 170,
    animationEasing: 'easeOutBounce',
    animateRotate: false,
    animateScale: false,
    tooltips : {
      enabled:false
    },
    cutoutPercentage : 70
  };
  console.log(this.height());
  var div1 = document.createElement('div');
  var newChart1 = document.createElement('canvas');
  div1.style.height = this.height() + 'px';
  this.append(div1);
  div1.appendChild(newChart1);
  var div2 = document.createElement('div');
  div2.style.height = this.height()/2 + 'px';
  console.log(0-(this.height()/2 - this.height()/4));
  div2.style.marginTop = 0-(this.height()/2 + this.height()/4) + 'px';
  var newChart2 = document.createElement('canvas');
  newChart2.height = '75';
  this.append(div2);
  div2.appendChild(newChart2);

};