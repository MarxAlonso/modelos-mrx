import { EditorDemo, RutaPasos, RutaPortada, type ArchivoDemo } from "../Ruta/RutaPortada";
import { RUTA_SPRING } from "./rutaSpring";

// los tres archivos de una API mínima: lo que se aprende en la ruta
const ARCHIVOS: ArchivoDemo[] = [
  {
    nombre: "HolaController.java",
    lineas: [
      [["@RestController", "t-lila"]],
      [["public class ", "t-acento"], ["HolaController {"]],
      [["  @GetMapping", "t-lila"], ["("], ['"/hola"', "t-verde"], [")"]],
      [["  public ", "t-acento"], ["String hola() {"]],
      [["    return ", "t-acento"], ['"¡Hola Mundo!"', "t-verde"], [";"]],
      [["  }"]],
      [["}"]],
    ],
  },
  {
    nombre: "Producto.java",
    lineas: [
      [["@Entity", "t-lila"]],
      [["public class ", "t-acento"], ["Producto {"]],
      [["  @Id", "t-lila"]],
      [["  private ", "t-acento"], ["Long id;"]],
      [["  private ", "t-acento"], ["String nombre;"]],
      [["}"]],
    ],
  },
  {
    nombre: "application.properties",
    lineas: [
      [["server.port", "t-lila"], ["="], ["8080", "t-verde"]],
      [["spring.datasource.url", "t-lila"], ["="], ["jdbc:mysql://localhost/api", "t-verde"]],
      [["spring.jpa.hibernate.ddl-auto", "t-lila"], ["="], ["update", "t-verde"]],
      [["# tu turno", "t-mute"]],
    ],
  },
];

export const SpringBootInfo = () => {
    return (
        <>
            <RutaPortada
                tono="backend"
                claim="Ruta de aprendizaje · Java · Spring · MySQL"
                titulo={["Aprende", "Spring Boot", <>desde <em>Java</em></>]}
                bajada="Inicia desde lo esencial de Java hasta crear APIs RESTful con Spring Boot conectadas a bases de datos MySQL. Este recorrido práctico y moderno te preparará para el desarrollo backend profesional en el ecosistema de Spring."
                primerPaso={{ texto: "Empezar con Java", ruta: "/aprendiendojava" }}
            >
                <EditorDemo titulo="~/mi-primera-api" archivos={ARCHIVOS}>
                    {/* lo que esa API responde cuando se la llama */}
                    <div className="mrx-fe-vista mrx-fe-vista--terminal" aria-hidden="true">
                        <div className="mrx-fe-vista__barra">
                            <i /><i /><i />
                            <span>curl</span>
                        </div>
                        <div className="mrx-fe-vista__pagina">
                            <span><span className="t-verde">$</span> curl :8080/hola</span>
                            <b>¡Hola Mundo!</b>
                            <span className="t-verde">200 OK</span>
                        </div>
                    </div>
                </EditorDemo>
            </RutaPortada>

            <RutaPasos pasos={RUTA_SPRING} />
        </>
    );
};
