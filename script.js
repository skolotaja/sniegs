const checkBoxContainer = document.querySelector('.checkbox-container');
const lightSwitch = document.querySelector('.light-switch');
const lightBulbContainer = document.querySelector('.light-bulbs');

checkBoxContainer.addEventListener('click', e => {
  e.target.classList.toggle('active');
});
lightSwitch.addEventListener('change', () => {
    lightBulbContainer.classList.toggle('on');
  });
  const lightSwitchState = document.querySelector('.light-switch-state');
const lightSwitchLabels = {
  on: 'off',
  off: 'on'
};
lightSwitchState.textContent = lightSwitchLabels[lightSwitchState.textContent];