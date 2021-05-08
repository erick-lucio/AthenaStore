package com.spring.daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.spring.db.Conexao;
import com.spring.models.Cliente;

public abstract class ClienteDao {
	
	public static void AdicionarCliente(Cliente cliente)throws Exception {
		Connection conexao = Conexao.getconnection();
		
		String sql = "INSERT INTO cliente (nome,cpf,data) values (?,?,now())";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setString(1,cliente.getNome());
		stmt.setString(2,cliente.getCPF());
		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static void RemoverCliente(Cliente cliente) throws Exception{
		Connection conexao = Conexao.getconnection();
		
		String sql = "DELETE FROM cliente WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setInt(1,cliente.getId());

		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static void AtualizarCliente(Cliente cliente) throws Exception{
		Connection conexao = Conexao.getconnection();
		
		String sql = "UPDATE cliente SET nome = ?, cpf = ?  WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		stmt.setString(1,cliente.getNome());
		stmt.setString(2,cliente.getCPF());
		stmt.setInt(3,cliente.getId());
		
		
		stmt.execute();
		stmt.close();
		conexao.close();
	}
	
	public static List<Cliente> TodosClientes() throws Exception {
		List<Cliente> clientes = new ArrayList<Cliente>();
		
		Connection conexao = Conexao.getconnection();
		
		String sql = "SELECT * FROM cliente";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		
		ResultSet rs = stmt.executeQuery();
		
		while(rs.next()) {
			Cliente cliente = new Cliente();
			cliente.setCPF(rs.getString("cpf"));
			cliente.setNome(rs.getString("nome"));
			cliente.setData(rs.getDate("data"));
			cliente.setId(rs.getInt("id"));
			
			clientes.add(cliente);
		}
		
		rs.close();
		stmt.close();
		conexao.close();
		
		return clientes;
	}
	
	public static Cliente GetCliente(int id) throws Exception {
		
		Cliente cliente = new Cliente();
		Connection conexao = Conexao.getconnection();
		
		String sql = "SELECT * FROM cliente WHERE id = ?";
		PreparedStatement stmt = conexao.prepareStatement(sql);
		stmt.setInt(1,id);
		
		ResultSet rs = stmt.executeQuery();
		
		while(rs.next()) {
			
			cliente.setCPF(rs.getString("cpf"));
			cliente.setNome(rs.getString("nome"));
			cliente.setData(rs.getDate("data"));
			cliente.setId(rs.getInt("id"));
			
			
		}
		
		rs.close();
		stmt.close();
		conexao.close();
		
		return cliente;
	}
}
