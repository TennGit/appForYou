import { connect } from 'react-redux'
import { addName } from '../reducers/addPeople'
import DailyTable from '../components/DailyTable'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
    return{
        addName: (input) => {dispatch(addName(input))}
    }
}

const DailyTableContainer = connect(mapStateToProps,mapDispatchToProps)(DailyTable)

export default DailyTableContainer