// ref(參考) https://github.com/nickpoorman/rmse


/**
 * compute the error
 */
const error = (real, pred) => {
    return pred - real;
}

/**
 * compute the squared error
 */
const squaredError = (real, pred) => {
    var squaredError = [];
    for (var i = real.length - 1; i >= 0; i--) {
        squaredError.push(Math.pow(error(real[i], pred[i]), 2));
    };
    return squaredError;
}

/**
 * compute the absolute percentage error
 */
const absolutePercentageError = (real, pred) => {
    var absolutePercentageError = [];
    for (var i = real.length - 1; i >= 0; i--) {
        absolutePercentageError.push(Math.abs(error(real[i], pred[i]) / real[i]));
    };
    return absolutePercentageError;
}

/**
 * compute the mean
 */
const mean = (val) => {
    var total = 0;
    for (var i = val.length - 1; i >= 0; i--) {
        total += val[i];
    }
    return total / val.length;
}

/**
 * compute the mean square error
 */
const mse = (real, pred) => {
    return mean(squaredError(real, pred));
}

/**
 * compute the root mean squared error
 */
export const RMSE = (real, pred) => {
    return Math.sqrt(mse(real, pred));
}
/**
 * compute the n-RMSE
 */
 export const nRMSE = (real, pred) => {
    return Math.sqrt(mse(real, pred))/mean(real) * 100;
}
/**
 * compute the mean absolute percentage error
 */
export const MAPE = (real, pred) => {
    return mean(absolutePercentageError(real, pred)) * 100;
}
