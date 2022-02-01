import { useState , useEffect} from 'react';
import Entrada from '../components/entrada';

const index = () => {
    let comparar = 0
    let pag = 1
    const [arregloFinal, setArregloFinal] = useState([]);
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
    useEffect(() => {
        ciclo().then(() => {
            setArregloFinal(totalTrabajos.filter(empleo => empleo.attributes.seniority.data.id < 3)
            .sort((a,b) => b.attributes.min_salary - a.attributes.min_salary))
            console.log(arregloFinal)
        })
    }, []
    )

    return <div>
        <div>hola rolito
        </div>
        {arregloFinal.map((e) => (
            <div key={e.id}>
                <Entrada
                    titulo={e.attributes.title}
                    salariomin = {e.attributes.min_salary}
                    salariomax = {e.attributes.max_salary}
                    descripcion={e.attributes.description}
                    url = {e.links.public_url}
                />
                <hr />
            </div>
        )
        )}
    </div>;
};

export default index;
