import { Sidebar } from 'flowbite-react'
import { HiUser , HiArrowSmRight } from 'react-icons/hi'
import { useLocation , Link } from 'react-router-dom';
import { useState , useEffect } from 'react';

export default function DashSidebar() {
    const location = useLocation();
    const [tab , setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
        setTab(tabFromUrl);
        }
    }, [location.search]);

    return (
        <Sidebar>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                   <Link to='/dashboard?tab=profile'>
                        <Sidebar.Item active={tab==='profile'} icon={HiUser} label="User" labelColor='dark'>
                             Profile
                        </Sidebar.Item>
                   </Link>
                    <Sidebar.Item icon={HiArrowSmRight}>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
