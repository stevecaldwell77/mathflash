import moment from 'moment';
import 'moment-duration-format';

export const formatDuration = (numMillis) => {
    const numSeconds = parseInt(numMillis / 1000, 10);
    return moment.duration(numSeconds, 'seconds').format('mm:ss', { trim: false });
};
