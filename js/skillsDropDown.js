const skillsTables = document.querySelectorAll('.technologies');
const dropDownArrows = document.querySelectorAll('.dropDownTechnologies');
const dropDownUl = document.querySelectorAll('.dropDownContent');

skillsTables.forEach(skillsTable => {
    skillsTable.addEventListener('click', function () {
        const id = Number(this.getAttribute('data-index'));
        dropDownArrows.forEach((dropDownArrow, i) => {
            if (dropDownArrow.classList.contains('openedTechnologies')) {
                dropDownArrow.classList.remove('openedTechnologies');
                dropDownUl[i].classList.remove('openedDropDownContent');
            }
            else {
                if (i === id) {
                    dropDownArrow.classList.add('openedTechnologies');
                    dropDownUl[i].classList.add('openedDropDownContent');
                }
                else {
                    dropDownArrow.classList.remove('openedTechnologies');
                    dropDownUl[i].classList.remove('openedDropDownContent');

                }

            }

        })
    })
})