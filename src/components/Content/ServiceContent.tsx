export default function ServiceContent() {
    return (
        <main className="w-full mx-auto flex flex-col items-center p-6">
            <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">
                Our Services
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Agendamentos Online</h3>
                    <p className="text-gray-600 mb-4">
                        O paciente pode escolher a data e o horário mais convenientes para ele, evitando esperas prolongadas em clínicas ou hospitais.
                    </p>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 transition duration-200"
                    >
                        Learn More
                    </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Notificações Automáticas</h3>
                    <p className="text-gray-600 mb-4">
                        O sistema envia notificações (por e-mail, SMS ou aplicativo) para lembrar o paciente sobre consultas agendadas, coleta de exames, retorno de resultados e outros eventos importantes.
                    </p>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 transition duration-200"
                    >
                        Learn More
                    </a>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Perfil de Paciente</h3>
                    <p className="text-gray-600 mb-4">
                        O paciente pode acessar e visualizar seus exames a qualquer momento, através de um computador, tablet ou smartphone, de forma simples e intuitiva.
                    </p>
                    <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 transition duration-200"
                    >
                        Learn More
                    </a>
                </div>

                {/* Você pode adicionar mais "service cards" aqui seguindo o mesmo modelo */}
            </div>
        </main>
    );
}
