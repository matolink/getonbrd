import React from 'react';

const index = () => {
    let comparar = 0
    let pag = 1
    let totalTrabajos = []
    async function log() {
        let res = await fetch('https://www.getonbrd.com/api/v0/categories/programming/jobs?per_page=100&page=' + pag)
        let data = await res.json()
        totalTrabajos = totalTrabajos.concat(data.data)
        console.log(data.data)
        return data.data.length
    }
    async function ciclo() {
        do {
            comparar = await log()
            console.log(comparar)
            pag = pag + 1
        } while (comparar == 100);
        console.log(totalTrabajos)
    }
    ciclo()
    return <div>
        <div>hola rolito
        </div>
    </div>;
};

export default index;
