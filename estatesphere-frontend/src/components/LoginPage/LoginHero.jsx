import Login from "../../assets/login/Login.jpg";
import BuildingLogoIcon from '../../assets/svg/common/BuildingLogoIcon';

export default function LoginHero() {
    return (
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
            <div className="absolute inset-0">
                <img
                    src={Login}
                    alt="Modern building"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-indigo-900/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center px-16 text-white">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <BuildingLogoIcon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-2xl font-bold">EstateSphere</span>
                </div>

                <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                    Manage your<br />
                    society<br />
                    with ease.
                </h1>

                <p className="text-lg text-white/90 mb-12 leading-relaxed max-w-md">
                    The all-in-one platform for modern real estate management. Seamlessly handle payments, maintenance, and community communication.
                </p>
                <div className="flex gap-12">
                    <div>
                        <div className="text-4xl font-bold mb-1">10k+</div>
                        <div className="text-white/80 text-sm uppercase tracking-wider">Societies</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-1">2M+</div>
                        <div className="text-white/80 text-sm uppercase tracking-wider">Residents</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-1">99.9%</div>
                        <div className="text-white/80 text-sm uppercase tracking-wider">Uptime</div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black/30 to-transparent"></div>
        </div>
    );
}
