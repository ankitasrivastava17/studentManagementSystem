
function student(name, ccourse, image, unit, batch)
{
    this.name = name;
    this.course = course;
    this.image = image;
    this.unit = unit;
    this.batch = `Ft-web ${batch}`;
}

const storeData = (e) => 
{
    e.preventDefault();

    let form = document.getElementById("studentsData");

    let name = form.name.value;
    let course = form.course.value;
    let image = form.image.value;
    let unit = form.unit.value;
    let batch = form.batch.value;

    let s1 = new student(name, course, image, unit, batch);

    let data = JSON.parse(localStorage.getItem('students')) || [];

    data.push(s1);

    localStorage.setItem('students', JSON.stringify(data));

    console.log(s1);

    form.name.value = '';
    form.course.value = '';
    form.image.value = '';
    form.unit.value = '';
    form.batch.value = '';


}
    calculate = () =>
    {
        let data = JSON.parse(localStorage.getItem('students')) || [];
        
        let obj = {};

        for( let i = 0; i < data.length; i++ )
        {
            if(!obj[data[i].batch])
            {
                obj[data[i].batch] = 0;
            }
        }

        for( let i = 0; i < data.length; i++ )
        {
            obj[data[i].batch]++;
        }

        console.log(obj);

        for(let key in obj)
        {
            console.log(key);
            let plan = document.createElement('p');
            plan.innerText = `Batch : ${key} - student's strength ${obj[key]}`;
            document.getElementById('navbar').append(plan);
            window.location.reload();
        }
    }

    calculate();
