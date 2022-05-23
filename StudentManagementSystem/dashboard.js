
const append = () =>
{
    let data = JSON.parse(localStorage.getItem('students')) || [];
    let div = document.getElementById('container');
    div.innerHTML = null;

    data.forEach(function(elm, index)
    {
        let box = document.createElement('div');

        let image = document.createElement('img');
        image.src = elm.image;

        let p = document.createElement('p');
        p.innerText = elm.name;

        let btn = document.createElement('button');
        btn.innerText = 'Remove';
        btn.addEventListener('click', () => 
        {
            remove(index);
        })

        box.append(image, p, btn);
                                      
        div.append(box);
    })
}

append();

// remove items
function remove(index)
{
    let data = JSON.parse(localStorage.getItem('students')) || [];

    let newData = data.filter(function(elm, i)
    {
        if(i == index)
        {
            let trash = JSON.parse(localStorage.getItem('trash')) || [];
            trash.push(elm);
            localStorage.setItem('trash', JSON.stringify(trash));
        }else
        {
            return i !== index;
        }
        
    });
    localStorage.setItem('students', JSON.stringify(newData));
    // OR
    // window.location.reload();

    append();

}
// remove()
calculate = () =>
    {
        let s_data = JSON.parse(localStorage.getItem('students')) || [];
        
        let obj = {};

        for( let i = 0; i < s_data.length; i++ )
        {
            if(!obj[s_data[i].batch])
            {
                obj[s_data[i].batch] = 0;
            }
        }

        for( let i = 0; i < s_data.length; i++ )
        {
            obj[s_data[i].batch]++;
        }

        console.log(obj);

        for(let key in obj)
        {
            console.log(key);
            let plan = document.createElement('p');
            plan.innerText = `Batch : ${key} - student's strength ${obj[key]}`;
            document.getElementById('navbar').append(plan);
        }
    }

    calculate();