
import HomePage from '@/components/template/HomePage';
import Customer from '@/models/Customer';
import styles from '@/styles/Home.module.css'
import connecDB from '@/utils/connectDB'


export default function Index({ customer }) {
  return (
    <div>
      <HomePage customer={customer} />
    </div>
  )
}

export async function getServerSideProps() {
  try {
    await connecDB();
    const customer = await Customer.find();
    return {
      props: {
        customer:JSON.parse(JSON.stringify(customer))
      }
    }
  } catch (err) {
    return {
      notFound:true,
    }
  }
}