//#region Calculations
const poundsToKilograms = (pounds) => pounds * 0.45359237;
const inchesToCentimeters = (inches) => inches * 2.54;

function calculateBMR(weight, height, age, female) {
    //men = (10 * weight(kg)) + (6.25 * height(cm)) - (5 * age(yrs)) + 5
    //women = (10 * weight(kg)) + (6.25 * height(cm)) - (5 * age(yrs)) - 161
    const val = (10 * weight) + (6.25 * height) - (5 * age);
    return female ? val - 161 : val + 5
}
//#endregion

function getBMRFormData() {
    const weightUnit = $("input[name='bmrWeightUnit']:checked").val();
    const heightUnit = $("input[name='bmrHeightUnit']:checked").val();
    const sex = $("input[name='bmrSex']:checked").val();
    const weight = parseFloat($("input[id='bmrWeightInput']").val());
    const height = parseFloat($("input[id='bmrHeightInput']").val());
    const age = parseFloat($("input[id='bmrAgeInput']").val());

    return { weightUnit, heightUnit, sex, weight, height, age }
}

$('#bmr-calculate').click((evt) => {
    evt.preventDefault();
    const formData = getBMRFormData();
    // Calculate BMR
    const weight = formData.weightUnit == 'pounds' ? poundsToKilograms(formData.weight) : formData.weight;
    const height = formData.heightUnit == 'inches' ? inchesToCentimeters(formData.height) : formData.height;
    const isFemale = formData.sex == 'femail';

    const bmr = calculateBMR(weight, height, formData.age, isFemale);
    ///Display Results

    console.log(bmr);
})

//#region Radio Click events
const setBmrLbl = (selector, text) => {
    $(selector).html(text)
}

$('#bmrPounds').click(_ => setBmrLbl('#bmr-weight-lbl', 'lbs'));
$('#bmrKilograms').click(_ => setBmrLbl('#bmr-weight-lbl', 'kgs'));
$('#bmrInches').click(_ => setBmrLbl('#bmr-height-lbl', 'in'));
$('#bmrCentimeters').click(_ => setBmrLbl('#bmr-height-lbl', 'cm'));
//#endregion