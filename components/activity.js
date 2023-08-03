import { useState, useEffect } from 'react';
import { activities } from '../data/activities'
import ActivityCard from './activityCard'

const styles = {
  activity: `bg-black w-96 h-auto p-5 py-10 text-white`,
  title: `flex items-center justify-between mb-10`,
  profileAvatarContainer: `w-14 h-14 rounded-full -ml-2 mr-3`,
  activityCard: `flex mb-6`,
  fixedActivity: `bg-black w-auto h-screen p-5 py-10 text-white fixed top-0 right-0`,
}

const Activity = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 100; // Adjust this value as needed
    if (window.scrollY > scrollThreshold) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isFixed ? styles.fixedActivity : styles.activity}>
      <div className={styles.title}>
        Friend Activity
        <img src='assets/friend.svg' alt='' />
      </div>

      <div className='mb-10'>
        {activities.map((activity, index) => {
          return (
            <ActivityCard
              avatar={activity.avatar}
              title={activity.title}
              subTitle={activity.subTitle}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Activity;