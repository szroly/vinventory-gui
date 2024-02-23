import Image from 'next/image';
import styles from './Page.module.scss'
import Link from 'next/link';
import { cookies } from 'next/headers';
import axios from 'axios';



async function getVehiclesData() {
  
  const cookieStore = cookies()
  const jwt = cookieStore.get('jwt')
  const token = jwt?.value
  
  try {
    const res = await axios.get('http://localhost:5000/vehicles', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
    return res.data
  } catch (e) {
    console.log(e)
    return null
  }

}


export default async function Home() {

  const data = await getVehiclesData()
  

  return (
    <div className="flex flex-col sm:flex-row  sm:justify-around items-center h-screen ">
      <div className={`w-full md:w-2/4 ${styles.mobileMargin} ${styles.firstContainer}`}>
        <Link
          href={`/vehicle/${data[0]._id}`}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="h-64 w-full relative">
            <Image
              src="/j_astra.jpg"
              alt="car"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Astra J 2010
            </h5>
          </div>
        </Link>
      </div>
      <div className={`w-full md:w-2/4 ${styles.secondContainer}`}>
      <Link
           href={`/vehicle/${data[1]._id}`}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="h-64 w-full relative">
            <Image
              src="/g_astra.jpg"
              alt="car"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Astra J 2010
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
}

