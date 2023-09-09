const selectCountries = document.querySelector('.select-countries');
const selectCity = document.querySelector('.select-city');

const countries = {
  select: ['کشور خود را انتخاب کنید'],
  ir: ['تهران', 'گیلان', 'تبریز', 'مشهد'],
  us: ['شیکاگو', 'نیویورک', 'لاس و گاس'],
  tr: ['ازمیر', 'آنکارا', 'استانبول'],
  ca: ['تورنتو', 'ونکوور'],
};

function countrySelectorEvent() {
  selectCountries.addEventListener('change', function () {
    const selectValue = selectCountries.value;
    const arrayContry = countries[selectValue];
    selectCity.innerHTML = ' ';

    arrayContry.forEach(function (city) {
      selectCity.innerHTML += '<option>' + city + '</option>';
    });
  });
}

function init() {
  countrySelectorEvent();
}

init();
