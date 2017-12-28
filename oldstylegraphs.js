var plotAnnualStateJetFuelConsumptionChoropleth = function() {

  var data = [{
    type: 'choropleth',
    locationmode: 'USA-states',
    locations: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
      'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ],
    z: [stateJetFuelConsumptionData['SEDS.JFTCP.AL.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.AK.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.AZ.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.AR.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.CA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.CO.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.CT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.DE.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.FL.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.GA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.HI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.ID.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.IL.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.IN.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.IA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.KS.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.KY.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.LA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.ME.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MD.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.MA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MN.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MS.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.MO.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.MT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NE.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NV.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NH.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.NJ.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NM.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NY.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NC.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.ND.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.OH.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.OK.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.OR.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.PA.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.RI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.SC.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.SD.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.TN.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.TX.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.UT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.VT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.VA.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.WA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.WV.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.WI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.WY.A'].y[0]
    ],
    zmin: 0,
    zmax: 200000,
    text: 'Barrrels per Year',
    hoverinfo: 'location+z+text',
    colorscale: [
      [0, 'rgb(242,240,247)'],
      [0.2, 'rgb(218,218,235)'],
      [0.4, 'rgb(188,189,220)'],
      [0.6, 'rgb(158,154,200)'],
      [0.8, 'rgb(117,107,177)'],
      [1, 'rgb(84,39,143)']
    ],
    colorbar: {
      title: 'Barrels Per Day',
      thickness: 10
    },
    marker: {
      line: {
        color: 'rgb(255,255,255)',
        width: 2
      }
    }
  }];

  var layout = {
    height: 700,
    width: 1200,
    geo: {
      scope: 'usa',
      showlakes: true,
      lakecolor: 'rgb(255,255,255)'
    }
  };

  Plotly.plot('stateJetFuelConsumptionChoropleth', data, layout, {
    showLink: false
  });
}

var plotAnnualStateJetFuelConsumptionBar = function() {

  var data = [{
    x: [stateJetFuelConsumptionData['SEDS.JFTCP.AL.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.AK.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.AZ.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.AR.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.CA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.CO.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.CT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.DE.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.FL.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.GA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.HI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.ID.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.IL.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.IN.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.IA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.KS.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.KY.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.LA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.ME.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MD.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.MA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MN.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MS.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.MO.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.MT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NE.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NV.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NH.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.NJ.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NM.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NY.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NC.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.ND.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.OH.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.OK.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.OR.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.PA.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.RI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.SC.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.SD.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.TN.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.TX.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.UT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.VT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.VA.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.WA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.WV.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.WI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.WY.A'].y[0]
    ],
    y: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
      'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
      'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ],
    orientation: "h",
    type: "bar",
  }];

  var layout = {
    title: 'Jet Fuel Consumption By State',
    height: 1200,
    width: 1000,
    barmode: 'stack'
  };

  Plotly.newPlot('stateJetFuelConsumptionBar', data, layout);
}



var plotAnnualStateJetFuelConsumptionChoropleth = function() {

  Plotly.newPlot('stateJetFuelConsumptionChoropleth', [{
    type: 'choropleth',
    locationmode: 'USA-states',
    locations: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK',
      'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ],
    z: [stateJetFuelConsumptionData['SEDS.JFTCP.AL.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.AK.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.AZ.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.AR.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.CA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.CO.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.CT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.DE.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.FL.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.GA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.HI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.ID.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.IL.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.IN.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.IA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.KS.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.KY.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.LA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.ME.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MD.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.MA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MN.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.MS.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.MO.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.MT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NE.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NV.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NH.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.NJ.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NM.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NY.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.NC.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.ND.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.OH.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.OK.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.OR.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.PA.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.RI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.SC.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.SD.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.TN.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.TX.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.UT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.VT.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.VA.A'].y[0],
      stateJetFuelConsumptionData['SEDS.JFTCP.WA.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.WV.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.WI.A'].y[0], stateJetFuelConsumptionData['SEDS.JFTCP.WY.A'].y[0]
    ],
    zmin: 0,
    zmax: 125000,
    text: 'Barrrels per Year',
    hoverinfo: 'location+z+text',
    colorscale: [
      [0, 'rgb(242,240,247)'],
      [0.2, 'rgb(218,218,235)'],
      [0.4, 'rgb(188,189,220)'],
      [0.6, 'rgb(158,154,200)'],
      [0.8, 'rgb(117,107,177)'],
      [1, 'rgb(84,39,143)']
    ],
    colorbar: {
      title: 'Barrels Per Day',
      thickness: 10
    },
    marker: {
      line: {
        color: 'rgb(255,255,255)',
        width: 2
      }
    }

  }])
}
