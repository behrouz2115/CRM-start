
import Customer from '@/models/Customer';
import styles from '@/styles/Home.module.css'
import connecDB from '@/utils/connectDB'


export default function Home() {
  return (
    <div>
      <h3>
        test
      </h3>
    </div>
  )
}
export async function getServerSideProps() {
  try {
    await connecDB();
    const customer = await Customer.find();
  } catch (err) {
    return {
      notFound:true,
    }
  }
}