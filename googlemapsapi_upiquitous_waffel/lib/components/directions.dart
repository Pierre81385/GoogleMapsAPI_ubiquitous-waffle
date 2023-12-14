import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class DirectionsComponent extends StatefulWidget {
  const DirectionsComponent({super.key});

  @override
  State<DirectionsComponent> createState() => _DirectionsComponentState();
}

class _DirectionsComponentState extends State<DirectionsComponent> {
  late String _origin;
  late String _destination;
  late Map<String, dynamic> _response;

  @override
  void initState() {
    super.initState();
    _origin = "2059 Albion Street, Denver, CO 80207";
    _destination = "2000 Hanover Street, Aurora, CO 80010";
    _response = {};
  }

  Future<void> getDirections() async {
    try {
      final response = await http.post(
        Uri.parse('http://localhost:3000/directions/route'),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: jsonEncode(
            <String, String>{"origin": _origin, "destination": _destination}),
      );
      setState(() {
        _response = json.decode(response.body);
      });
    } catch (e) {
      print(e.toString());
      setState(() {
        _response = {"message": e.toString()};
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        OutlinedButton(
            onPressed: () {
              getDirections();
            },
            child: Text('Get Directions')),
        Text(_response.toString())
      ],
    );
  }
}
