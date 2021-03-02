const clientsTab = document.getElementById('clients');

async function createClientsTable() {
    let response = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json');

    let json = await response.json();
    let table = document.createElement('table');
    

    
    
    let tr = document.createElement('tr');
        
        let thName = document.createElement('th');
        let thCompany = document.createElement('th');
        let thEmail = document.createElement('th');
        let thPhone = document.createElement('th');
        let thBalance = document.createElement('th');
        let thDate = document.createElement('th');

        thName.innerHTML = "Имя";
        thCompany.innerHTML = "Компания";
        thEmail.innerHTML = "Почта";
        thPhone.innerHTML = "Телефон";
        thBalance.innerHTML = "Баланс";
        thDate.innerHTML = "Дата регистрации";

        tr.append(thName);
        tr.append(thCompany);
        tr.append(thEmail);
        tr.append(thPhone);
        tr.append(thBalance);
        tr.append(thDate);
        tr.style.background = '#c3c3c4';
        table.append(tr);

    for(let i = 0; i < json.length; i++) {
        let tr = document.createElement('tr');
        
        let tdName = document.createElement('td');
        let tdCompany = document.createElement('td');
        let tdEmail = document.createElement('td');
        let tdPhone = document.createElement('td');
        let tdBalance = document.createElement('td');
        let tdDate = document.createElement('td');

        let str = json[i].registered.substr(0, 10);
        let ms = Date.parse(str);
        console.log(Date.parse(json[i].registered));
        let date = new Date(ms);
        let day = date.getDate();
        day = +day > 9 ? day : `0${day}`;
        let month = date.getMonth() + 1;
        month = +month > 9 ? month : `0${month}`;
        let year = date.getFullYear();

        tdName.innerHTML = json[i].name;
        tdCompany.innerHTML = json[i].company;
        tdEmail.innerHTML = json[i].email;
        tdPhone.innerHTML = json[i].phone;
        tdBalance.innerHTML = json[i].balance;
        tdDate.innerHTML = `${day}:${month}:${year}`;

        tr.append(tdName);
        tr.append(tdCompany);
        tr.append(tdEmail);
        tr.append(tdPhone);
        tr.append(tdBalance);
        tr.append(tdDate);

        
        


        
        // if(tr.isActive) {
        //     tr.style.background = 'white';
        // } else {
        //     tr.style.background = '#dee0e2';
        // }

        table.append(tr);
        tr.style.background = '#dee0e2';
        
        // tr.addEventListener('mousemove', tableStyle)

        // let tableStyle = function(){
        //     tr.style.background = 'white';
        // }

    }

    let extraInfo = document.createElement('div');
    extraInfo.classList.add('extraInfo');

    let men = document.createElement('div');
    let women = document.createElement('div');
    let balance = document.createElement('div');

    let menAmount = 0;
    let womenAmount = 0;
    for (let i = 0; i < json.length; i++) {
        if(json.gender == 'male') {
            menAmount++;
        } else if(json.gender == 'male') {
            menAmount++;
        } 
    }
    men.append(table)

    clientsTab.append(table);
}

createClientsTable()