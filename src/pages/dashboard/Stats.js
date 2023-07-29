import { useEffect } from 'react'
import { StatsContainer, ChartContainer } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../features/allJobs/allJobsSlice'

const Stats = () => {
  const { monthlyApplications } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showStats())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  )
}
export default Stats
