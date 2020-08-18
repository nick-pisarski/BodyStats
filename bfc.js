
function round2(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

// Weight and nine measurements
$('#bfc-calculate').click((evt) => {
    evt.preventDefault();

    const wt = parseFloat($('#bfcWeightInput').val());

    const measurements = []
    // Front
    measurements.push(parseFloat($('#bfc-pec').val()));
    measurements.push(parseFloat($('#bfc-abs').val()));
    measurements.push(parseFloat($('#bfc-bicep').val()));
    measurements.push(parseFloat($('#bfc-suprailiac').val()));
    measurements.push(parseFloat($('#bfc-quad').val()));

    // Back
    measurements.push(parseFloat($('#bfc-tricep').val()));
    measurements.push(parseFloat($('#bfc-subscapular').val()));
    measurements.push(parseFloat($('#bfc-kidney').val()));
    measurements.push(parseFloat($('#bfc-calf').val()));

    const sum = measurements.reduce((sum, curr) => sum += curr, 0);

    const bfr = sum / wt;
    const bfp = 0.27 * bfr;
    const fatlbs = bfp * wt;
    const lm = wt - fatlbs;

    $('#results').show();

    $('#bfc-bfr>span').html(round2(bfr));
    $('#bfc-bfp>span').html(`${round2(bfp * 100)} %`);
    $('#bfc-flb>span').html(round2(fatlbs));
    $('#bfc-lbm>span').html(round2(lm));

})
