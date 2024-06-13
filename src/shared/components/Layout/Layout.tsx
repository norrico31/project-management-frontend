import Topbar from './Topbar'
import Sidebar from './Sidebar'

export default function Layout() {
    return (
        <div className='app'>
            <Sidebar />
            <main className="content">
                <Topbar />
                {/* <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/bar" element={<Bar />} />
                    <Route path="/pie" element={<Pie />} />
                    <Route path="/line" element={<Line />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/geography" element={<Geography />} />
                </Routes> */}
            </main>
        </div>
    )
}
