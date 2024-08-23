import React from 'react'

export const Principal = () => {
  return (
    <>
    <div className="container text-center" style={{"height": "100vh"}} >

    {/* Encabezado */}
        <div className="row mt-5 align-items-center">
            <div className="col-md-6 mt-5">
                <h1 className="titulo">Soria Lucía</h1>
                <hr/>
                <ul className="items-descripcion">
                    <li>Desarrolladora full-stack</li>
                    <li>Docente de Programación</li>
                </ul>
            </div>
            <div className="col-md-6">
                <img src="/naruto.png" alt="Imagen"/>
            </div>
        </div>

    {/* Sobre mi */}
        <div className="row mt-5 justify-content-center align-items-center ">
            <div className="col-md-6">
                <img src="/naruto.png" alt="Imagen"/>
            </div>
            <div className="col-md-6 mt-5">
                <h1 className="sobre-mi ms-4">¡Mucho gusto!</h1>
                <p className="ms-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id a cumque ut neque natus dicta tempore non quia eveniet est explicabo voluptas commodi necessitatibus, tenetur maiores doloribus esse voluptatibus ullam?</p>
            </div>
        </div>

        {/* Tecnologias */}
        <div className="row mt-5 justify-content-center align-items-center ">
            <div className="col-md-4">
                <h1>Tecnologías</h1>
            </div>
            <div className="col-md-2 mt-5">
                <ul>
                    <li>React</li>
                    <li>.Net</li>
                    <li>Django</li>
                    <li>Material UI</li>
                    <li>Redux Toolkit</li>
                </ul>
            </div>
            <div className="col-md-2 mt-5">
                <ul>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C#</li>
                </ul>
            </div>
            <div className="col-md-2 mt-5">
                <ul>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>ArangoDB</li>
                </ul>
            </div>
            <div className="col-md-2 mt-5">
                <ul>
                    <li>UML</li>
                    <li>Especificación de requerimientos</li>
                    <li>Metodologías ágiles</li>
                </ul>
            </div>
        </div>



    {/* Habilidades */}
        {/* <div className="row mt-5 justify-content-center">
            <div className="col-md-4 tecnologias" >
                <h2>Tecnologías</h2>
                <div className="row">
                    <div className="col-2">
                        <ul>
                            <li>React</li>
                            <li>.Net</li>
                            <li>Django</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul>
                            <li>Java</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>ArangoDB</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-4 tecnologias" >
                <h2>Habilidades blandas</h2>
            </div>
            <div className="col-4 tecnologias" >
                <h2>Educación</h2>
            </div>
        </div> */}

    {/* Mis proyectos */}
        <div className="row mt-5 justify-content-center align-items-center">
            <div className="col-4 proyectos" >
                <h2>Mis proyectos</h2>
            </div>
        </div>
    </div>
    </>
  )
}
