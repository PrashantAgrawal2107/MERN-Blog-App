import { Sidebar } from 'flowbite-react'
import { HiUser , HiArrowSmRight , HiDocumentText , HiOutlineUserGroup } from 'react-icons/hi'
import { useLocation , Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { signoutSuccess } from '../redux/user/userSlice.js';
import { useDispatch , useSelector } from 'react-redux';

export default function DashSidebar() {
    const dispatch = useDispatch();
    const location = useLocation();
    const {currentUser} = useSelector(state=>state.user);
    const [tab , setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
        setTab(tabFromUrl);
        }
    }, [location.search]);

    const handleSignout = async () => {
        try {
          const res = await fetch('/api/user/signout', {
            method: 'POST',
          });
          const data = await res.json();
          if (!res.ok) {
            console.log(data.message);
          } else {
            dispatch(signoutSuccess());
          }
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <Sidebar className='w-full md-w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup className='flex flex-col gap-1'>
                   <Link to='/dashboard?tab=profile'>
                        <Sidebar.Item as='div' active={tab==='profile'} icon={HiUser} label={currentUser.isAdmin ? "Admin" : "User"} labelColor='dark'>
                             Profile
                        </Sidebar.Item>
                   </Link>
                   {currentUser.isAdmin && 
                      <Link to='/dashboard?tab=posts'>
                        <Sidebar.Item active={tab === 'posts'} icon={HiDocumentText} as='div'>
                          Posts
                        </Sidebar.Item>
                      </Link>
                   }
                   {currentUser.isAdmin && (
                      <>
                        <Link to='/dashboard?tab=users'>
                          <Sidebar.Item
                            active={tab === 'users'}
                            icon={HiOutlineUserGroup}
                            as='div'
                          >
                            Users
                          </Sidebar.Item>
                        </Link>
                      </>
                    )}
                    <Sidebar.Item onClick={handleSignout} icon={HiArrowSmRight}>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}
