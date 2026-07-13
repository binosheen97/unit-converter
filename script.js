// Unit definitions: each unit has a factor to convert TO base unit
const categories = {
    length: {
        title: '📏 Length Converter',
        desc: 'Convert between metric and imperial length units',
        base: 'meter',
        units: {
            'Kilometer (km)':      { key: 'km',    factor: 1000 },
            'Meter (m)':           { key: 'm',     factor: 1 },
            'Centimeter (cm)':     { key: 'cm',    factor: 0.01 },
            'Millimeter (mm)':     { key: 'mm',    factor: 0.001 },
            'Micrometer (μm)':     { key: 'um',    factor: 0.000001 },
            'Mile (mi)':           { key: 'mi',    factor: 1609.344 },
            'Yard (yd)':           { key: 'yd',    factor: 0.9144 },
            'Foot (ft)':           { key: 'ft',    factor: 0.3048 },
            'Inch (in)':           { key: 'in',    factor: 0.0254 },
            'Nautical Mile (nmi)': { key: 'nmi',   factor: 1852 },
        },
        popular: [
            { from: 'Centimeter (cm)', to: 'Inch (in)', val: 1, label: '1 cm → inches' },
            { from: 'Inch (in)', to: 'Centimeter (cm)', val: 1, label: '1 inch → cm' },
            { from: 'Kilometer (km)', to: 'Mile (mi)', val: 1, label: '1 km → miles' },
            { from: 'Mile (mi)', to: 'Kilometer (km)', val: 1, label: '1 mile → km' },
            { from: 'Foot (ft)', to: 'Meter (m)', val: 1, label: '1 foot → meters' },
            { from: 'Meter (m)', to: 'Foot (ft)', val: 1, label: '1 meter → feet' },
        ]
    },
    weight: {
        title: '⚖️ Weight Converter',
        desc: 'Convert between metric and imperial weight/mass units',
        base: 'gram',
        units: {
            'Tonne (t)':           { key: 't',    factor: 1000000 },
            'Kilogram (kg)':       { key: 'kg',   factor: 1000 },
            'Gram (g)':            { key: 'g',    factor: 1 },
            'Milligram (mg)':      { key: 'mg',   factor: 0.001 },
            'Microgram (μg)':      { key: 'ug',   factor: 0.000001 },
            'Pound (lb)':          { key: 'lb',   factor: 453.59237 },
            'Ounce (oz)':          { key: 'oz',   factor: 28.349523 },
            'Stone (st)':          { key: 'st',   factor: 6350.29318 },
            'US Ton (short)':      { key: 'ston', factor: 907184.74 },
            'UK Ton (long)':       { key: 'lton', factor: 1016046.9 },
        },
        popular: [
            { from: 'Kilogram (kg)', to: 'Pound (lb)', val: 1, label: '1 kg → lbs' },
            { from: 'Pound (lb)', to: 'Kilogram (kg)', val: 1, label: '1 lb → kg' },
            { from: 'Kilogram (kg)', to: 'Ounce (oz)', val: 1, label: '1 kg → oz' },
            { from: 'Stone (st)', to: 'Kilogram (kg)', val: 1, label: '1 stone → kg' },
            { from: 'Gram (g)', to: 'Ounce (oz)', val: 100, label: '100 g → oz' },
            { from: 'Pound (lb)', to: 'Gram (g)', val: 1, label: '1 lb → grams' },
        ]
    },
    temperature: {
        title: '🌡️ Temperature Converter',
        desc: 'Convert between Celsius, Fahrenheit and Kelvin',
        base: 'celsius',
        units: {
            'Celsius (°C)':    { key: 'c' },
            'Fahrenheit (°F)': { key: 'f' },
            'Kelvin (K)':      { key: 'k' },
        },
        popular: [
            { from: 'Celsius (°C)', to: 'Fahrenheit (°F)', val: 0, label: '0°C → °F' },
            { from: 'Fahrenheit (°F)', to: 'Celsius (°C)', val: 32, label: '32°F → °C' },
            { from: 'Celsius (°C)', to: 'Fahrenheit (°F)', val: 100, label: '100°C → °F' },
            { from: 'Celsius (°C)', to: 'Kelvin (K)', val: 0, label: '0°C → Kelvin' },
            { from: 'Celsius (°C)', to: 'Fahrenheit (°F)', val: 37, label: '37°C (body) → °F' },
            { from: 'Fahrenheit (°F)', to: 'Celsius (°C)', val: 98.6, label: '98.6°F → °C' },
        ]
    },
    volume: {
        title: '💧 Volume Converter',
        desc: 'Convert between metric and imperial volume units',
        base: 'liter',
        units: {
            'Liter (L)':           { key: 'l',    factor: 1 },
            'Milliliter (mL)':     { key: 'ml',   factor: 0.001 },
            'Cubic Meter (m³)':    { key: 'm3',   factor: 1000 },
            'Cubic Centimeter (cm³)': { key: 'cc', factor: 0.001 },
            'US Gallon (gal)':     { key: 'usgal', factor: 3.785411784 },
            'US Quart (qt)':       { key: 'usqt',  factor: 0.946352946 },
            'US Pint (pt)':        { key: 'uspt',  factor: 0.473176473 },
            'US Cup':              { key: 'uscup', factor: 0.2365882365 },
            'US Fluid Ounce (fl oz)': { key: 'usfloz', factor: 0.0295735296 },
            'UK Gallon':           { key: 'ukgal', factor: 4.54609 },
            'UK Pint':             { key: 'ukpt',  factor: 0.56826125 },
        },
        popular: [
            { from: 'Liter (L)', to: 'US Gallon (gal)', val: 1, label: '1 liter → US gallons' },
            { from: 'US Gallon (gal)', to: 'Liter (L)', val: 1, label: '1 gallon → liters' },
            { from: 'Milliliter (mL)', to: 'US Fluid Ounce (fl oz)', val: 100, label: '100 ml → fl oz' },
            { from: 'US Cup', to: 'Milliliter (mL)', val: 1, label: '1 cup → ml' },
            { from: 'Liter (L)', to: 'UK Pint', val: 1, label: '1 liter → UK pints' },
            { from: 'UK Gallon', to: 'Liter (L)', val: 1, label: '1 UK gallon → liters' },
        ]
    },
    time: {
        title: '⏱️ Time Converter',
        desc: 'Convert between time units from nanoseconds to years',
        base: 'second',
        units: {
            'Year (yr)':           { key: 'yr',   factor: 31557600 },
            'Month (avg)':         { key: 'mo',   factor: 2629800 },
            'Week (wk)':           { key: 'wk',   factor: 604800 },
            'Day (d)':             { key: 'd',    factor: 86400 },
            'Hour (hr)':           { key: 'hr',   factor: 3600 },
            'Minute (min)':        { key: 'min',  factor: 60 },
            'Second (s)':          { key: 's',    factor: 1 },
            'Millisecond (ms)':    { key: 'ms',   factor: 0.001 },
            'Microsecond (μs)':    { key: 'us',   factor: 0.000001 },
            'Nanosecond (ns)':     { key: 'ns',   factor: 0.000000001 },
        },
        popular: [
            { from: 'Hour (hr)', to: 'Minute (min)', val: 1, label: '1 hour → minutes' },
            { from: 'Day (d)', to: 'Hour (hr)', val: 1, label: '1 day → hours' },
            { from: 'Week (wk)', to: 'Day (d)', val: 1, label: '1 week → days' },
            { from: 'Year (yr)', to: 'Day (d)', val: 1, label: '1 year → days' },
            { from: 'Minute (min)', to: 'Second (s)', val: 1, label: '1 minute → seconds' },
            { from: 'Year (yr)', to: 'Hour (hr)', val: 1, label: '1 year → hours' },
        ]
    }
};

let currentCategory = 'length';

// Convert temperature (special case)
function convertTemp(val, from, to) {
    const fk = from.key, tk = to.key;
    let celsius;
    if (fk === 'c') celsius = val;
    else if (fk === 'f') celsius = (val - 32) * 5 / 9;
    else celsius = val - 273.15;

    if (tk === 'c') return celsius;
    if (tk === 'f') return celsius * 9 / 5 + 32;
    return celsius + 273.15;
}

function switchCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-cat="${cat}"]`).classList.add('active');

    const data = categories[cat];
    document.getElementById('cat-title').textContent = data.title;
    document.getElementById('cat-desc').textContent = data.desc;

    // Populate dropdowns
    const fromSel = document.getElementById('from-unit');
    const toSel = document.getElementById('to-unit');
    const unitKeys = Object.keys(data.units);

    fromSel.innerHTML = unitKeys.map(u => `<option value="${u}">${u}</option>`).join('');
    toSel.innerHTML = unitKeys.map(u => `<option value="${u}">${u}</option>`).join('');

    // Default selections
    fromSel.value = unitKeys[0];
    toSel.value = unitKeys[1];

    document.getElementById('input-value').value = '1';
    convertUnits();
    renderPopular();
}

function convertUnits() {
    const val = parseFloat(document.getElementById('input-value').value);
    const fromName = document.getElementById('from-unit').value;
    const toName = document.getElementById('to-unit').value;
    const data = categories[currentCategory];

    if (isNaN(val)) {
        document.getElementById('main-result').innerHTML = '<span class="result-placeholder">Enter a value to convert</span>';
        document.getElementById('all-results').innerHTML = '';
        return;
    }

    const fromUnit = data.units[fromName];
    const toUnit = data.units[toName];

    let result;
    if (currentCategory === 'temperature') {
        result = convertTemp(val, fromUnit, toUnit);
    } else {
        const baseVal = val * fromUnit.factor;
        result = baseVal / toUnit.factor;
    }

    // Main result
    document.getElementById('main-result').innerHTML = `
        <div>
            <div class="result-from">${formatNum(val)} ${fromName} =</div>
            <div class="result-value-main">${formatNum(result)}</div>
            <div class="result-to-unit">${toName}</div>
        </div>
    `;

    // All conversions
    renderAllConversions(val, fromUnit, fromName, toName);
}

function renderAllConversions(val, fromUnit, fromName, selectedTo) {
    const data = categories[currentCategory];
    let html = '';

    Object.entries(data.units).forEach(([name, unit]) => {
        let converted;
        if (currentCategory === 'temperature') {
            converted = convertTemp(val, fromUnit, unit);
        } else {
            const baseVal = val * fromUnit.factor;
            converted = baseVal / unit.factor;
        }

        const isHighlight = name === selectedTo;
        html += `
            <div class="conversion-row ${isHighlight ? 'highlight' : ''}" onclick="selectToUnit('${name}')">
                <span class="conv-unit">${name}</span>
                <span class="conv-value">${formatNum(converted)}</span>
            </div>
        `;
    });

    document.getElementById('all-results').innerHTML = html;
}

function selectToUnit(name) {
    document.getElementById('to-unit').value = name;
    convertUnits();
}

function swapUnits() {
    const fromSel = document.getElementById('from-unit');
    const toSel = document.getElementById('to-unit');
    [fromSel.value, toSel.value] = [toSel.value, fromSel.value];
    convertUnits();
}

function renderPopular() {
    const pops = categories[currentCategory].popular;
    const list = document.getElementById('popular-list');
    list.innerHTML = pops.map(p => {
        const fromUnit = categories[currentCategory].units[p.from];
        const toUnit = categories[currentCategory].units[p.to];
        let result;
        if (currentCategory === 'temperature') {
            result = convertTemp(p.val, fromUnit, toUnit);
        } else {
            result = (p.val * fromUnit.factor) / toUnit.factor;
        }
        return `
            <div class="pop-item" onclick="loadPopular('${p.from}','${p.to}',${p.val})">
                <span class="pop-label">${p.label}</span>
                <span class="pop-result">= ${formatNum(result)}</span>
            </div>
        `;
    }).join('');
}

function loadPopular(from, to, val) {
    document.getElementById('from-unit').value = from;
    document.getElementById('to-unit').value = to;
    document.getElementById('input-value').value = val;
    convertUnits();
}

function formatNum(n) {
    if (Math.abs(n) >= 0.0001 && Math.abs(n) < 1e15) {
        const rounded = parseFloat(n.toPrecision(8));
        return rounded.toLocaleString('en-US', { maximumFractionDigits: 8 });
    }
    return n.toExponential(4);
}

// Init
switchCategory('length');
